using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyRepository.Interfaces;
using Microsoft.Extensions.Logging;
using ViewModel;

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

        [HttpGet("/myget/name={name}")]
        public MyName MyGet(string name)
        {
            _logger.LogInformation(LoggingEvents.GetItem, $"Getting name {name}");
            var myname = _myNameSendler.SendMyName(name);
            if (myname == null)
            {
                _logger.LogWarning(LoggingEvents.GetItemNotFound, "SendMyName(name) NOT FOUND");
                return null;
            }
            return myname;
        }
    }
}
