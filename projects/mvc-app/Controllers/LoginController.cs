using Microsoft.AspNetCore.Mvc;

namespace mvc_app.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult HandleLogin()
        {
            return View("Views//Home");
        }
    }
}
