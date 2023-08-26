<script>
	import { cart} from '$lib/stores/Cart'

  // Check if window is defined (browser environment)
  if (typeof window !== 'undefined') {
    // Load cart items from local storage when the component initializes
    const savedCartJSON = localStorage.getItem('cart');
    const savedCart = savedCartJSON ? JSON.parse(savedCartJSON) : [];
    cart.set(savedCart);

	
    // Rest of your component code here...
  }
  const rmToCart = (/** @type {any } */ product) => {
    const updatedCart = $cart.map(item => ({ ...item })); // Create a shallow copy

    const existingItem = updatedCart.find(item => item.id === product.id);

    if (existingItem && existingItem.quantity > 0) {
      existingItem.quantity -= 1; // Corrected line
    }

    cart.set(updatedCart); // Update the cart store

    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update local storage
  };

</script>

<button
on:click={() => rmToCart({ id: 3, name: 'Grapes', image: '🍇', price: 15, quantity: -1 })}
					class="text-xl ml-2 my-2 px-4 py-1 border-opacity-30 hover:border-opacity-80 hover:bg-opacity-20 hover:text-opacity-100 text-opacity-70 hover:bg-[rgb(255,233,221)] hover:scale-105 transition-all duration-150 rounded-sm self-center font-bold border-2 border-[rgb(255,233,221)] text-[rgb(255,233,221)]"
				>
					-
				</button>