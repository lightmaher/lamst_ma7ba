﻿using lamst_ma7ba_Api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lamst_ma7ba_Api.Repository.PlaceRepository
{
    public class PlaceRepo : IPlaceRepo
    {
        private readonly Context _context;

        public PlaceRepo(Context context)
        {
            _context = context;
        }

        public async Task<Place> AddPlaceAsync(Place model)
        {
            if (model == null)
                return null;

            var place = new Place { 
                Title = model.Title,
                Description = model.Description,
                url = model.url
            };
            await _context.places.AddAsync(place);
            await _context.SaveChangesAsync();
            return place;
        }

        public async Task<bool> DeletePlaceAsync(int id)
        {
                var place =await _context.places.FindAsync(id);
                if (place == null)
                    return false;

                _context.places.Remove(place);
                await _context.SaveChangesAsync();
                return true;
        }

        public async Task<Place> EditPlaceAsync(Place model)
        {
            if (model.Id == 0)
            {
                return null;
            }
            var place = await _context.places.FirstOrDefaultAsync(p => p.Id == model.Id);
            if (place == null)
                return null;
            _context.places.Attach(place);
            place.Title = model.Title;
            place.Description = model.Description;
            place.url = model.url;
            _context.Entry(place).Property(p => p.Title).IsModified = true;
            _context.Entry(place).Property(p => p.Description).IsModified = true;
            _context.Entry(place).Property(p => p.url).IsModified = true;
            await _context.SaveChangesAsync();
            return place;

        }

        public async Task<IEnumerable<Place>> GetAllPlacesAsync()
        {
            return await _context.places.ToListAsync();
        }

        public async Task<Place> GetPlaceAsync(int id)
        {
            if (id !=0)
            {
                var place = await _context.places.FirstOrDefaultAsync(p => p.Id == id);
                if (place == null)
                    return null;
                return place;
            }
            return null;
        }
    }
}