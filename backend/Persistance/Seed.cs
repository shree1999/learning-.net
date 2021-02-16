using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Models;

namespace Persistance
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var users = new List<AppUser> 
                {
                    new AppUser
                    {
                        DisplayName = "Bob",
                        UserName = "bob",
                        Email = "bob@test.com"
                    },
                    new AppUser
                    {
                        DisplayName = "Jane",
                        UserName = "jane",
                        Email = "jane@test.com"
                    },
                    new AppUser
                    {
                        DisplayName = "Tom",
                        UserName = "tom",
                        Email = "tom@test.com"
                    },
                };

                foreach (var user in users) 
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }
            if (!context.Activities.Any()) 
            {
                var activities = new List<Activity> {
                    new Activity {
                        Title="Standup-Meeting", 
                        Description="Discussing about everyday news and updates", 
                        Date=new DateTime(2021, 02, 18),
                        Venue="Microsoft Teams",
                        City="Bangalore"
                    },
                    new Activity {
                        Title="Head Space", 
                        Description="Discussing about week news and suggestion", 
                        Date=new DateTime(2021, 02, 18),
                        Venue="Microsoft Teams",
                        City="Bangalore"
                    }
                };
                context.Activities.AddRange(activities);
            }
            context.SaveChanges();
        }
    }
}