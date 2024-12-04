// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout } from './slices/authSlice';
// import Navbar from './components/Navbar';
// import Login from './pages/Login';
// import Home from './pages/Home';
// import AddCourse from './pages/AddCourse';
// import ViewCourses from './pages/ViewCourses';
// import WatchCourse from './pages/WatchCourse';
// import Dashboard from './pages/Dashboard';
// import Signup from './pages/Signup';

// function ProtectedRoute({ children, allowedRoles }) {
//   const { isAuthenticated, role } = useSelector((state) => state.auth);

//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   if (allowedRoles && !allowedRoles.includes(role)) {
//     return <Navigate to="/" />;
//   }

//   return children;
// }

// function App() {
//   const { isAuthenticated, role } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(logout()); // Clear Redux state
//     window.location.href = '/login'; // Redirect to login page
//   };

//   return (
//     <Router>
//       {/* Navbar */}
//       <Navbar isAuthenticated={isAuthenticated} role={role} onLogout={handleLogout} />

//       <Routes>
//         {/* Public Route */}
//         <Route path="/login" element={<Login />} />

//         <Route path="/signup" element={<Signup />} />

//         {/* Protected Routes */}
//         <Route
//           path="/home"
//           element={
//             <ProtectedRoute allowedRoles={['instructor', 'user']}>
//               <Home />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/add-course"
//           element={
//             <ProtectedRoute allowedRoles={['instructor']}>
//               <AddCourse />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/courses"
//           element={
//             <ProtectedRoute allowedRoles={['instructor', 'user']}>
//               <ViewCourses />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//   path="/dashboard"
//   element={
//     <ProtectedRoute allowedRoles={[ 'instructor','user']}>
//       <Dashboard />
//     </ProtectedRoute>
//   }
// />
//         <Route
//           path="/watch/:id"
//           element={
//             <ProtectedRoute allowedRoles={['instructor', 'user']}>
//               <WatchCourse />
//             </ProtectedRoute>
//           }
//         />

//         {/* Default Route */}
//         <Route
//           path="/"
//           element={
//             isAuthenticated ? (
//               role === 'instructor' ? (
//                 <Navigate to="/home" />
//               ) : (
//                 <Navigate to="/courses" />
//               )
//             ) : (
//               <Navigate to="/login" />
//             )
//           }
//         />

//         {/* Catch-All */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './slices/authSlice';
import Navbar from './components/Navbar';
import AboutUs from './pages/Aboutus'; // Matching updated file name
 // Import your AboutUs component here

function App() {
  const { isAuthenticated, role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // Clear Redux state
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <Router>
      {/* Navbar */}
      <Navbar isAuthenticated={isAuthenticated} role={role} onLogout={handleLogout} />

      <Routes>
        {/* About Us Route (Direct access without login) */}
        <Route path="/about-us" element={<AboutUs />} />

        {/* Default Route */}
        <Route
          path="/"
          element={<Navigate to="/about-us" />} // Redirect to About Us page by default
        />

        {/* Catch-All */}
        <Route path="*" element={<Navigate to="/about-us" />} />
      </Routes>
    </Router>
  );
}

export default App;
