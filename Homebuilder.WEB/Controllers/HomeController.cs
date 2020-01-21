using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Homebuilder.WEB.Models;
using System.IO;
using Microsoft.AspNetCore.Hosting;

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
