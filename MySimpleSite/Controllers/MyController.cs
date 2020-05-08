using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MySimpleSite.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MyController : Controller
    {
        [HttpGet("/myget")]
        public string MyGet()
        {
            var name = $"IVAN";
            return name;
        }
    }
}
