using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ViewModel
{
    public class MyName
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
    }
}
