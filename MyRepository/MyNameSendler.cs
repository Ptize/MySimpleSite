using Microsoft.Extensions.Logging;
using MyRepository.Interfaces;
using System;
using System.Xml.Schema;
using ViewModel;

namespace MyRepository
{
    public class MyNameSendler: IMyNameSendler
    {
        private readonly ILogger _logger;
        private readonly Context _context;
        public MyNameSendler(ILoggerFactory logger, Context context)
        {
            _logger = logger.CreateLogger($"MyApi.Repositories.MyNameSendler, DateTime:{DateTime.Now}");
            _context = context;
        }
        public MyName SendMyName(string name)
        {
            _logger.LogInformation(LoggingEvents.GetItem, $"Getting name {name}, DateTime:{DateTime.Now}");
            
            var result = pushName(name);

            clearName(result);

            return result;
        }

        private MyName pushName(string name)
        {
            _logger.LogInformation(LoggingEvents.InsertItem, $"Insert name {name}, DateTime:{DateTime.Now}");
            var myname = new MyName();
            myname.Id = Guid.NewGuid();
            myname.Name = name;
            _context.Names.Add(myname);
            //_context.SaveChanges();

            return myname;
        }
        private void clearName(MyName myName)
        {
            _logger.LogInformation(LoggingEvents.DeleteItem, $"Delete name {myName.Name}, DateTime:{DateTime.Now}");
            _context.Names.Remove(myName);
            //_context.SaveChanges();
        }
    }
}
