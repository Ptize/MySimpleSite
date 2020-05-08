using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyRepository.Interfaces;
using Microsoft.Extensions.Logging;
using MyData;

namespace MySimpleSite.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MyController : Controller
    {
        private readonly IMyNameSendler _myNameSendler;
        private readonly ILogger _logger;

        public MyController(IMyNameSendler myNameSendler,
                            ILoggerFactory logger)
        {
            _myNameSendler = myNameSendler;
            _logger = logger.CreateLogger("MyApi.Controllers.MyController");
        }

        [HttpGet("/myget")]
        public string MyGet()
        {
            _logger.LogInformation(LoggingEvents.GetItem, "Getting name ");
            var name = $"{_myNameSendler.SendMyName()}";
            if (name == null)
            {
                _logger.LogWarning(LoggingEvents.GetItemNotFound, "MyGet() NOT FOUND");
                return null;
            }
            return name;
        }
    }
}
