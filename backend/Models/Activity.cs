using System;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class Activity
    {
        [Key]
        public Guid Id { get; set; }
        
        [Required]
        [StringLength(255)]
        public string Title { get; set; }

        [Required]
        public string Description { get; set; }

        public DateTime Date { get; set; }

        public string Venue { get; set; }

        public string City { get; set; }
    }
}