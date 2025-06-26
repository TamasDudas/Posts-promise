import React from 'react';

export default function UserDetails({ user }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
      <h4 className="text-lg font-semibold mb-2">Alapadatok</h4>
      <p className="mb-1">
        <strong>1. User ID:</strong> {user?.id || 'Nincs ID'}
      </p>
      <p className="mb-1">
        <strong>2. Név:</strong> {user?.name || 'Ismeretlen szerző'}
      </p>
      <p className="mb-1">
        <strong>3. Felhasználónév:</strong>{' '}
        {user?.username || 'Ismeretlen felhasználónév'}
      </p>
      <p className="mb-1">
        <strong>4. Email:</strong> {user?.email || 'Ismeretlen email'}
      </p>
      <p className="mb-1">
        <strong>5. Telefonszám:</strong>{' '}
        {user?.phone || 'Ismeretlen telefonszám'}
      </p>
      <p className="mb-3">
        <strong>6. Weboldal:</strong> {user?.website || 'Nincs weboldal'}
      </p>

      <h4 className="text-lg font-semibold mb-2">Lakcím</h4>
      <p className="mb-1">
        <strong>7. Utca:</strong> {user?.address?.street || 'Ismeretlen utca'}
      </p>
      <p className="mb-1">
        <strong>8. Apartman/Iroda:</strong>{' '}
        {user?.address?.suite || 'Nincs megadva'}
      </p>
      <p className="mb-1">
        <strong>9. Város:</strong> {user?.address?.city || 'Ismeretlen város'}
      </p>
      <p className="mb-1">
        <strong>10. Irányítószám:</strong>{' '}
        {user?.address?.zipcode || 'Ismeretlen irányítószám'}
      </p>

      <h4 className="text-lg font-semibold mt-3 mb-2">GPS Koordináták</h4>
      <p className="mb-1">
        <strong>11. Szélesség (Latitude):</strong>{' '}
        {user?.address?.geo?.lat || 'Ismeretlen szélesség'}
      </p>
      <p className="mb-3">
        <strong>12. Hosszúság (Longitude):</strong>{' '}
        {user?.address?.geo?.lng || 'Ismeretlen hosszúság'}
      </p>

      <h4 className="text-lg font-semibold mb-2">Cég/Munkahely adatok</h4>
      <p className="mb-1">
        <strong>13. Cégnév:</strong> {user?.company?.name || 'Ismeretlen cég'}
      </p>
      <p className="mb-1">
        <strong>14. Cég szlogen:</strong>{' '}
        {user?.company?.catchPhrase || 'Nincs szlogen'}
      </p>
      <p className="mb-1">
        <strong>15. Üzleti terület:</strong>{' '}
        {user?.company?.bs || 'Ismeretlen üzleti terület'}
      </p>
    </div>
  );
}
