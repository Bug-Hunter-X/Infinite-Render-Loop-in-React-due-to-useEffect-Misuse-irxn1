```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fix: Only run once after the initial render
    setCount(count + 1);
  }, []); // Empty dependency array

  return <div>Count: {count}</div>;
}
```