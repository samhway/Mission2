using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Controllers
{
    public class AppController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Grades()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Grades(GradesModel model)
        {
            return View();
        }
    }
}
