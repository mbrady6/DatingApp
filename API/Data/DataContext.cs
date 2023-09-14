using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions options) : base(options)
    {

    }

    // Will represent table named Users in the database
    public DbSet<AppUser> Users { get; set; }

}
