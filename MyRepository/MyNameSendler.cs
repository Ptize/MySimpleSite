using Microsoft.Extensions.Logging;
using MyData;
using MyRepository.Interfaces;

namespace MyRepository
{
    public class MyNameSendler: IMyNameSendler
    {
        private readonly ILogger _logger;
        public MyNameSendler(ILoggerFactory logger)
        {
            _logger = logger.CreateLogger("MyApi.Repositories.MyNameSendler");
        }
        public string SendMyName()
        {
            _logger.LogInformation(LoggingEvents.GetItem, "Getting name ");
            var name = $"IVAN";
            return name;
        }
    }
}
