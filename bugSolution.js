```javascript
import Link from 'next/link';
import { useState, useEffect } from 'react';

function MyComponent() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Simulate data fetching
    const timeout = setTimeout(() => {
      setIsReady(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {isReady && (
        <Link href="/about">
          <a>About Us</a>
        </Link>
      )}
    </div>
  );
}

export default MyComponent;
```