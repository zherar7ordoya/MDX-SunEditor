import React from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
 
const MyComponent = props => {
  return (
    <div>
      <p> SunEditor </p>
      <SunEditor />
    </div>
  );
};
export default MyComponent;