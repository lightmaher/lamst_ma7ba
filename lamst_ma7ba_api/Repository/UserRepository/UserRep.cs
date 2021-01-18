using lamst_ma7ba_Api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lamst_ma7ba_Api.Repository.UserRepository
{
    public class UserRep : IUserRep
    {
        private readonly Context _context;

        public UserRep(Context context)
        {
            _context = context;
        }
        public async Task AddUser(User user)
        {

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            
        }

        public async Task DeleteUser(int id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == id);
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
        }

        public async Task<User> ShowUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            return user;

        }

        public async Task<IList<User>> ShowUsers()
        {
            var users = await _context.Users.ToListAsync();
            return users;
        }
    }
}
