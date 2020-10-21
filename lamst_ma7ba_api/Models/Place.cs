﻿using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace lamst_ma7ba_Api.Models
{
    public class Place
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        [NotMapped]
        public IFormFile file { get; set; }
        public string url { get; set; }
        [Required]
        public string Description { get; set; }
    }
}