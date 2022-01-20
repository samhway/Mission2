using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class GradesModel
    {

        [Range(1,100)]
        public float assign { get; set; }
        [Range(1, 100)]
        public float gp { get; set; }
        [Range(1, 100)]
        public float quiz { get; set; }
        [Range(1, 100)]
        public float exam { get; set; }
        [Range(1, 100)]
        public float intex { get; set; }

    }
}
