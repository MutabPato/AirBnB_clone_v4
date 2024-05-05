$(function () {
  // Initialize an empty array to store checked Amenity IDs
  const checkedAmenities = [];

  // Function to update the list of checked Amenities in the <h4> tag
  function updateCheckedAmenities () {
    // Clear the existing content of the <h4> tag
    $('div.amenities h4').empty();

    // Loop through the checked Amenity IDs and append them to the <h4> tag
    checkedAmenities.forEach(function (amenityID) {
      $('div.amenities h4').append('<li>' + amenityID + '</li>');
    });
  }

  // Listen for changes on each input checkbox tag
  $("input[type='checkbox']").change(function () {
    const amenityID = $(this).val();

    if ($(this).is(':checked')) {
      // If checkbox is checked, add the Amenity ID to the array
      checkedAmenities.push(amenityID);
    } else {
      // If checkbox is unchecked, remove the Amenity ID from the array
      const index = checkedAmenities.indexOf(amenityID);
      if (index !== -1) {
        checkedAmenities.splice(index, 1);
      }
    }
    updateCheckedAmenities();
  });
});
