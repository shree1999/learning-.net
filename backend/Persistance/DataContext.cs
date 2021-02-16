using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Models;

namespace Persistance
{
    public class DataContext: IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options): base(options)
        {            
        }

        public DbSet<Activity> Activities { get; set; }
    }
}