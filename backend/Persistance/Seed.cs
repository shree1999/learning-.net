using System;
using System.Collections.Generic;
using System.Linq;
using Models;

namespace Persistance
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
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
                context.SaveChanges();
            }
        }
    }
}