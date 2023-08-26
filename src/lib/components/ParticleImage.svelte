<script>
    export let image = 'https://images.unsplash.com/photo-1679626951853-60e909d288ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80';
</script>

<svg style="display: none;">
    <defs>
      <filter id="noise">
        <feTurbulence
          baseFrequency="0.7,0.8"
          seed="0"
          type="fractalNoise"
          result="static"
        >
          <animate
            attributeName="seed"
            values="0;100"
            dur="800ms"
            repeatCount="1" 
            begin="card.mouseenter"                           
          />
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" in2="static">
          <animate
            attributeName="scale"
            values="0;40;0"
            dur="800ms"
            repeatCount="1" 
            begin="card.mouseenter"                           
          />
        </feDisplacementMap>
      </filter>  
    </defs>
  </svg>
  
  <div id="card">
    <img 
      src={image}
      alt="Neon sign in woods" 
    />
  </div>
  
  <div id="links">
    <div class="meta-link">  
      <span class="label">Links</span>
      <span class="dot">·</span>
      <a class="source" href="https://advanced.team" target="_blank">
        <i class="fa-solid fa-link"></i>
      </a>
      <span class="dot">·</span>
      <a class="youtube" href="https://youtu.be/z1wZp4jV4cQ" target="_blank">
        <i class="fa-brands fa-youtube"></i>
      </a>
    </div>
  </div>

  <style>


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

@keyframes pulse {
  from, to {
    scale: 1;
  }
  
  50% {
    scale: 1.08;
  }
}

#card {
  width: 580px;
  aspect-ratio: 2 / 3;
  border: 0.25rem solid rgb(255 255 255 / 15%);
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
}

#card > img {  
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: inherit;
}

#card:hover > img {
  animation: pulse 800ms ease-in-out;
  filter: url(#noise);
}

@media(max-width: 768px) {
  #card {
    width: 100%;
  }
}

/* -- Links -- */

#links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: 10;
  padding: 1rem;
}

.meta-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.meta-link > :is(span, a) {
  font-family: "Rubik", sans-serif;
  font-size: 1.25rem;
  color: white;
}

.meta-link > .label {
  text-align: right;
}

.meta-link > a {
  text-decoration: none;
  outline: none;
}

.meta-link > a.source {
  color: rgb(94, 106, 210);
}

.meta-link > a:is(:hover, :focus) > i {
  color: white;  
}

.meta-link > a.youtube {
  color: rgb(239, 83, 80);
}

.meta-link > a.youtube > i {
  padding-top: 0.2rem; 
}

.meta-link > a > i {
  height: 1rem;
  line-height: 1rem;
}
  </style>