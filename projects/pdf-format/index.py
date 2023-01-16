import sys
import os
from fpdf import FPDF, errors
import pathspec
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


def createHeader(fileName: str):
    return f"START {fileName}<br/><br/>"


def createFooter(fileName: str):
    return f"<br/><br/>END {fileName}<br/><br/>"


# writeContent to the final output
# inserts header + footer for START and
# END of file being appended
def writeContent(pdf: FPDF, fileName: str, contents: str):
    try:
        header = createHeader(fileName)
        footer = createFooter(fileName)
        pdf.write_html(header + contents + footer)
    except Exception as e:
        print(f"Failed to add {fileName} to final PDF:" + e)


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
    try:
        with file.open(mode='r', encoding="UTF-8") as f:
            # Add pre tag to show code on page without formattting issues
            formatted = "<pre>"
            for contents in f.readlines():
                for line in contents.split(os.linesep):
                    line = escape(line)
                    formatted += line
            # Escape file contents so they are dispalyed correctly
            return escape(formatted + "</pre>")
    except UnicodeDecodeError as e:
        print(f"{os.linesep}Skipping non text file ({file.name})")
        print(e)
        return None
    # except Exception as e:
    #     print(e)
    #     return None


path = getCodePath(sys.argv)
excludePaths = getExcludePaths()
files = getCodeFiles(path, excludePaths)

pdf = FPDF()
pdf.add_page()


bar = IncrementalBar('Processing', max=len(files))

for file in files:
    # bar.next()
    contents = getFormattedContents(file)

    if type(contents) != str:
        continue
    try:
        writeContent(pdf, file.name, f"<div>{contents}</div>")
    except Exception as e:
        print(f"{os.linesep}Failed to add {file.resolve()} to final PDF:")
        print(e)


pdf.output("html.pdf")
bar.finish()
