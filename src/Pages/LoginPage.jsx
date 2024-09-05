import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input fields
    if (!email || !password) {
      setError('يجب ملء جميع الحقول');
      return;
    }

    // Mock login logic (replace with actual API call)
    console.log('User logged in:', { email, password });

    // Clear form and error after successful login
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div className="login-container">
      <h2>تسجيل الدخول</h2>
      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label>اسم المستخدم:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ادخل اسم المستخدم:"
          />
        </div>
        <div className="form-group">
          <label>كلمة المرور:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="أدخل كلمة المرور"
          />
        </div>
        <button type="submit">تسجيل الدخول</button>
      </form>
    </div>
  );
};

export default Login;
