import dynamic from 'next/dynamic';

// Dynamically import the component without server-side rendering
const NoSSRComponent = dynamic(() => import('./NoSSRComponent'), { ssr: false });

const YourComponent = () => {
  return (
    <div>
      <h1>Page with No SSR Component</h1>
      <NoSSRComponent />
    </div>
  );
};

export default YourComponent;
