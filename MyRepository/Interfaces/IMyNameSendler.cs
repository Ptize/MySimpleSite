using System;
using System.Collections.Generic;
using System.Text;
using ViewModel;

namespace MyRepository.Interfaces
{
    public interface IMyNameSendler
    {
        public MyName SendMyName(string name);
    }
}
