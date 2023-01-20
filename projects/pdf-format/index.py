import sys
import os
import pathspec
import emoji
from fpdf import FPDF, errors
from pathlib import Path
from html import escape
from progress.bar import IncrementalBar


PIPE = "│"
ELBOW = "└──"
TEE = "├──"
PIPE_PREFIX = "│   "
SPACE_PREFIX = "    "


def generateTree():
    pass


def errorAndExit(message: str):
    print(message)
    exit(1)


HEADER_FOOTER_PADDING = 4


def addPadding(text: str, paddingText: str, amount: int):
    padding = paddingText * amount
    return padding + text + padding


def createHeader(fileName: str):
    return addPadding(f"START {fileName}", "<br>", HEADER_FOOTER_PADDING)


def createFooter(fileName: str):
    return addPadding(f"END {fileName}", "<br>", HEADER_FOOTER_PADDING)


# writeContent to the final output
# inserts header + footer for START and
# END of file being appended
def writeContent(pdf: FPDF, fileName: str, contents: str):
    try:
        header = createHeader(fileName)
        footer = createFooter(fileName)
        pdf.write_html(header + contents + footer)
    except Exception as e:
        print(f"Failed to add {fileName} to final PDF:")
        print(e)


# Check path has been provided by the user
# and that the folder exists
def getCodePath(args: list[str]):
    parsedArgs = args[1:]
    if len(parsedArgs) < 1:
        errorAndExit(
            "Usage:\n  py format.py <path to code>\n\nExample:\n  py format.py \"C:\\Users\\123456\\os-project")

    path = parsedArgs[0]
    if not os.path.exists(path):
        errorAndExit(
            f"{path} \"does\" not exist. Please include a path that exists!")

    return path


# Get all files to be placed into the PDF
# Follow exclude for files that should be
# ignored in file output
def getCodeFiles(path: str, exclude: list[str]):
    files = Path(path).glob('**/*.*')
    spec = pathspec.PathSpec.from_lines("gitwildmatch", exclude)
    files = [file for file in files if not spec.match_file(str(file))]
    return files


def getExcludePaths():
    if Path(".gitignore").exists():
        return Path(".gitignore").read_text().splitlines()
    return []


# Format file contents into valid HTML to be
# rendered within PDF
def getFormattedContents(file: Path):
    # lol
    for encoding in ["UTF-8", "ascii"]:
        try:
            with file.open(mode='r', encoding=encoding) as f:
                # Add pre tag to show code on page without formattting issues
                formatted = ""
                for contents in f.readlines():
                    for line in contents.split(os.linesep):
                        line = escape(line)
                        formatted += line
                # Escape file contents so they are dispalyed correctly
                # Convert emojis to text names
                htmlSafe = escape(formatted)
                emojiRemove = emoji.demojize(htmlSafe)
                replaceNewlines = emojiRemove
                finalText = replaceNewlines.replace("\r\n", "<br>").replace(
                    "\n", "<br>").replace(" ", "&nbsp")
                PREFIX = '<div style="white-space: pre;">'
                SUFFIX = '</div style="white-space: pre;">'
                return PREFIX + finalText + SUFFIX
        except Exception as e:
            print(f"{encoding} failed for {file.resolve()}.")

    return None


path = getCodePath(sys.argv)
excludePaths = getExcludePaths()
files = getCodeFiles(path, excludePaths)

pdf = FPDF()
pdf.add_font(fname="FreeMono.ttf")
pdf.set_font("FreeMono")
pdf.add_page()

bar = IncrementalBar('Processing', max=len(files))

for file in files:
    bar.next()
    contents = getFormattedContents(file)

    if type(contents) != str:
        print(f"{os.linesep}Skipped {file.resolve()}")
        continue
    try:
        writeContent(pdf, file.resolve(), f"<div>{contents}</div>")
    except Exception as e:
        print(f"{os.linesep}Failed to add {file.resolve()} to final PDF:")


pdf.output("html.pdf")
bar.finish()
