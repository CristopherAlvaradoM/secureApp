import React, { useState } from 'react';

interface InputWithLabelProps {
  label: string;
  id: string;
  type: 'text' | 'password' | 'email';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const getPasswordStrength = (password: string): number => {
  // Evaluar la fortaleza de la contraseña
  const uppercaseRegex = /[A-Z]/;
  const numberRegex = /[0-9]/;
  const specialCharRegex = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/;

  const hasUppercase = uppercaseRegex.test(password) ? 1 : 0;
  const hasNumber = numberRegex.test(password) ? 1 : 0;
  const hasSpecialChar = specialCharRegex.test(password) ? 1 : 0;
  const hasMinLength = password.length >= 8 ? 1 : 0;

  // Calcular la fortaleza en función de los criterios cumplidos
  const strength = (hasUppercase + hasNumber + hasSpecialChar + hasMinLength) / 4;

  return strength;
};

const InputWithLabel: React.FC<InputWithLabelProps> = ({ label, id, type, value, onChange }) => {
  const [showStrength, setShowStrength] = useState(false);
  const strength = getPasswordStrength(value);

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-base font-medium text-black">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => {
          onChange(e);
          if (type === 'password') {
            setShowStrength(true);
          }
        }}
        onBlur={() => setShowStrength(false)}
        className="mt-2 p-2 text-base text-black bg-gray-100 border rounded-md w-full focus:outline-none focus:border-secondary hover:shadow-sm"
      />
      {type === 'password' && showStrength && (
        <div className="mt-2">
          <div className="bg-gray-200 h-2 w-full rounded-md overflow-hidden">
            <div
              className={`h-full ${strength >= 0.7 ? 'bg-green-500' : 'bg-yellow-500'}`}
              style={{ width: `${strength * 100}%` }}
            />
          </div>
          <div className="text-sm text-black mt-1">
            {strength < 0.7 && (
              <span>
                La contraseña debe contener al menos una mayúscula, un número,
                un carácter especial y tener al menos 8 caracteres.
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default InputWithLabel;
