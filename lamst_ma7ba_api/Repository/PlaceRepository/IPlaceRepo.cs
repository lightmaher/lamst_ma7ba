using lamst_ma7ba_Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lamst_ma7ba_Api.Repository.PlaceRepository
{
    public interface IPlaceRepo
    {
        Task<IList<Place>> getHomePlacesAsync();

        Task<IEnumerable<Place>> GetAllPlacesAsync();
        Task<Place> GetPlaceAsync(int id);
        Task<Place> AddPlaceAsync(Place model);
        Task<Place> EditPlaceAsync(Place model);
        Task<bool> DeletePlaceAsync(int id);
    }
}
