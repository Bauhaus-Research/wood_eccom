<script>
    let products = [
        {
            image: 'https://picsum.photos/200/300',
            name: 'Product 1',
            price: 100,
            rating: 4.5,
            tag: 'new',
        },
        {
            image: 'https://picsum.photos/200/300',
            name: 'Product 1',
            price: 100,
            rating: 4.5,
        },
        {
            image: 'https://picsum.photos/200/300',
            name: 'Product 1',
            price: 100,
            rating: 4.5,
        },
        {
            image: 'https://picsum.photos/200/300',
            name: 'Product 1',
            price: 100,
            rating: 4.5,
        },

        {
            image: 'https://picsum.photos/200/300',
            name: 'Product 1',
            price: 100,
            rating: 4.5,
        },
        {
            image: 'https://picsum.photos/200/300',
            name: 'Product 1',
            price: 100,
            rating: 4.5,
        },
        {
            image: 'https://picsum.photos/200/300',
            name: 'Product 1',
            price: 100,
            rating: 4.5,
        },

    ]
	import HiddenItem from "$lib/components/HiddenItem.svelte";
	import Nav from "$lib/components/Nav.svelte";
  import RangeSlider from "svelte-range-slider-pips";
let sliderMin = 0;
let sliderMax = 100;

let optionsFilter = [
    {
        title: 'Order By',
        answer: `
            <div class="grid grid-cols-1">
                <label class="flex items-center space-x-2">
                    <input type="radio" name="sort-option" value="best-match" class="form-radio h-4 w-4 text-indigo-600" checked>
                    <span class="text-gray-700">Best Match</span>
                </label>
                <label class="flex items-center space-x-2">
                    <input type="radio" name="sort-option" value="most-popular" class="form-radio h-4 w-4 text-indigo-600">
                    <span class="text-gray-700">Most Popular</span>
                </label>
                <label class="flex items-center space-x-2">
                    <input type="radio" name="sort-option" value="a-z" class="form-radio h-4 w-4 text-indigo-600">
                    <span class="text-gray-700">A-Z</span>
                </label>
                <label class="flex items-center space-x-2">
                    <input type="radio" name="sort-option" value="z-a" class="form-radio h-4 w-4 text-indigo-600">
                    <span class="text-gray-700">Z-A</span>
                </label>
            </div>
        `,
    },
    {
        title: "Size",
        answer: `
        <h1>Height</h1>
            <div class="grid grid-cols-1">
                <label class="flex items-center space-x-2">
                    <input type="radio" name="sort-option-height" value="best-match" class="form-radio h-4 w-4 text-indigo-600" checked>
                    <span class="text-gray-700">Best Match</span>
                </label>
                <label class="flex items-center space-x-2">
                    <input type="radio" name="sort-option-height" value="most-popular" class="form-radio h-4 w-4 text-indigo-600">
                    <span class="text-gray-700">Most Popular</span>
                </label>
                <label class="flex items-center space-x-2">
                    <input type="radio" name="sort-option-height" value="a-z" class="form-radio h-4 w-4 text-indigo-600">
                    <span class="text-gray-700">A-Z</span>
                </label>
                <label class="flex items-center space-x-2">
                    <input type="radio" name="sort-option-height" value="z-a" class="form-radio h-4 w-4 text-indigo-600">
                    <span class="text-gray-700">Z-A</span>
                </label>
            </div>
        <h1>Width</h1>
            <div class="grid grid-cols-1">
                <label class="flex items-center space-x-2">
                    <input type="radio" name="sort-option-width" value="best-match" class="form-radio h-4 w-4 text-indigo-600" checked>
                    <span class="text-gray-700">Best Match</span>
                </label>
                <label class="flex items-center space-x-2">
                    <input type="radio" name="sort-option-width" value="most-popular" class="form-radio h-4 w-4 text-indigo-600">
                    <span class="text-gray-700">Most Popular</span>
                </label>
                <label class="flex items-center space-x-2">
                    <input type="radio" name="sort-option-width" value="a-z" class="form-radio h-4 w-4 text-indigo-600">
                    <span class="text-gray-700">A-Z</span>
                </label>
                <label class="flex items-center space-x-2">
                    <input type="radio" name="sort-option-width" value="z-a" class="form-radio h-4 w-4 text-indigo-600">
                    <span class="text-gray-700">Z-A</span>
                </label>
            </div>
        
        `
    }, 
    {
        title: "Features",
        answer: `
        <div class=" items-center">
                    <label class="flex items-center space-x-2">
                        <input type="checkbox" class="form-checkbox text-indigo-600 h-5 w-5">
                        <span class="text-gray-700">Made For Business</span>
                    </label>
                    <label class="flex items-center space-x-2">
                        <input type="checkbox" class="form-checkbox text-indigo-600 h-5 w-5">
                        <span class="text-gray-700">Custumer Favourite</span>
                    </label>
                    
                </div>
        `
    }
]
let scrollY = 0;
</script>

<svelte:window bind:scrollY={scrollY} />
<Nav {scrollY}/>
<section class="">
    <section class="bg-green-800 h-96 flex flex-col justify-center items-center">
        <h1 class="flex text-white  text-2xl font-bold">
            PRODUCTS</h1>
        <div class="flex text-white text-opacity-70 w-60 justify-between">
            <a class="font-light text-white text-opacity-30 hover:text-opacity-100 transition-all duration-300" href="/">Home</a> 
            <div class="text-white text-opacity-30"> > </div> 
            <a class="font-light text-white text-opacity-30 hover:text-opacity-100 transition-all duration-300" href="/categories">Catergories</a>  
            <div class="text-white text-opacity-30"> > </div> 
            Cat_Id...
        </div>
    </section>

    <section class="grid grid-cols-12  mt-20">
        <section class="lg:col-span-2 md:col-span-3 sm:col-span-4 hidden sm:block h-fullcol-span-3">
            <!-- Left sidebar content -->
            <div class="sticky top-16 w-full px-4 py-4">
                <!-- Content of the black square -->
                <h1 class="font-bold text-lg">Filter By</h1>
                <h1>Available</h1>
                
                <div class=" items-center">
                    <label class="flex items-center space-x-2">
                        <input type="checkbox" class="form-checkbox text-indigo-600 h-5 w-5">
                        <span class="text-gray-700">Available (99)</span>
                    </label>
                    <label class="flex items-center space-x-2">
                        <input type="checkbox" class="form-checkbox text-indigo-600 h-5 w-5">
                        <span class="text-gray-700">In-Stock (100)</span>
                    </label>
                    
                </div>
                
                <h1>Price</h1>
                <RangeSlider range values={[sliderMin,sliderMax]} pips />
                {#each optionsFilter as option}
                    <HiddenItem title={option.title} answer={option.answer} />
                {/each}
            </div>
            
        </section>

        <section class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 col-span-12 sm:col-span-8 md:col-span-9 lg:col-span-10 h-full pl-4 w-full ">
            {#each products as product}
                <a href="/categories/living-room/product" class="flex flex-col justify-start items-center mr-4 mb-10">
                    <div class="h-60 max-w-[15rem] w-full flex justify-center items-center group bg-cover" style="background-image: url('{ product.image }'); ">

                    </div>

                    <div class="flex flex-col justify-between max-w-[15rem] w-full ">
                        <div class="text-start text-lg font-bold">
                            <h1 class="text-start text-lg font-bold">{product.name}</h1>
                        <h1 class="text-start text-sm font-light">{product.rating}</h1>
                        </div>
                        <h1 class="text-start text-lg mt-4 font-bold">{product.price}</h1>
                        <h1 class="text-start text-lg mt-4 font-bold">{product.price}</h1>
                        <div class="text-start text-lg mt-4 font-bold flex">
                            <button class="bg-green-800 text-white px-4 py-2 rounded-md">Add to cart</button> heart
                        </div>
                        <div class="text-start text-lg mt-4 font-bold flex">
                            {#each [1,2,3,4,5] as star}
                                <div class="w-4 h-4 bg-red-400 mr-1"></div>
                            {/each}
                        </div>
                    </div>

                </a>
            {/each}
        </section>
    </section>
    
    

</section>