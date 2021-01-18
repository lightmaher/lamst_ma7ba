using lamst_ma7ba_Api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lamst_ma7ba_Api.Repository.NeedRepository
{
    public class NeedRepo : INeedRepo
    {
        private readonly Context _context;

        public NeedRepo(Context context)
        {
            _context = context;
        }
        public async Task<Need> AddNeedAsync(Need model)
        {

            if (model == null)
            {
                return null;
            }
            var need = new Need
            {
                Id = model.Id,
                Month = model.Month,
                Description = model.Description
            };
            await _context.Needs.AddAsync(model);
            await _context.SaveChangesAsync();
            return model;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var need =await _context.Needs.FindAsync(id);
            if (need == null)
                return false;
            _context.Needs.Remove(need);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<Need> EditNeedAsync(Need model)
        {
            if (model.Id == 0)
                return null;
            var need = await _context.Needs.FirstOrDefaultAsync(n => n.Id == model.Id);
            if (need == null)
                return null;
            _context.Needs.Attach(need);
            need.Month = model.Month;
            need.Description = model.Description;
            _context.Entry(need).Property(n => n.Month).IsModified = true;
            _context.Entry(need).Property(n => n.Description).IsModified = true;
            await _context.SaveChangesAsync();
            return need;
        }

        public async Task<IEnumerable<Need>> GetAllNeedsAsync()
        {
            return await _context.Needs.ToListAsync();
        }
        public async Task<Need> GetNeedAsync(int id)
        {
            if (id != 0)
            {
                var need = await _context.Needs.FirstOrDefaultAsync(p => p.Id == id);
                if (need == null)
                    return null;
                return need;
            }
            return null;
        }
    }
}
