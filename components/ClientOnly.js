import {useEffect, useState} from 'react'

// We used a custom component to ensure we only request the countries
// from the client to avoid sending duplicate requests during page rendering.

function useHasMounted() {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
      setHasMounted(true);
    }, []);
    return hasMounted;
  }

export default function ClientOnly({children, ...delegated}) {
    const hasMounted = useHasMounted();
    
    if (!hasMounted) return null;

    return <div {...delegated}>
        <h1>fasdlkjf;klasdjf;lkasdjflk;asdjflkasdjf;klj</h1>
        {children}
    </div>
}