using Homebuilder.WEB.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.IO;

namespace Homebuilder.WEB.Controllers
{
    public class HomeController : Controller
    {
        public IHostingEnvironment _hostingEnvironment { get; }
        public HomeController(IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        [HttpGet]
        public IActionResult RedirectIndex()
        {
            return new PhysicalFileResult(
                Path.Combine(_hostingEnvironment.WebRootPath, "index.html"), "text/html"
            );
        }
    }
}
