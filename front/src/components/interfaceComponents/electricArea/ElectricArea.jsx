import './ElectricArea.css'

export default function ElectricArea ({type = 'legacy', width = '100%', height = '100%' , children}) {
  return (
    <main className="main-container">
        {/* SVG */}
        <svg className="svg-container">
            <defs>
            <filter id="origins-svg" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="1" />
                <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
                <animate attributeName="dy" values="700; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
                </feOffset>

                <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="1" />
                <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
                <animate attributeName="dy" values="0; -700" dur="6s" repeatCount="indefinite" calcMode="linear" />
                </feOffset>

                <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="2" />
                <feOffset in="noise1" dx="0" dy="0" result="offsetNoise3">
                <animate attributeName="dx" values="490; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
                </feOffset>

                <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="2" />
                <feOffset in="noise2" dx="0" dy="0" result="offsetNoise4">
                <animate attributeName="dx" values="0; -490" dur="6s" repeatCount="indefinite" calcMode="linear" />
                </feOffset>

                <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
                <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
                <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />

                <feDisplacementMap in="SourceGraphic" in2="combinedNoise" scale="30" xChannelSelector="R" yChannelSelector="B" />
            </filter>
            <filter id="legacy-svg" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="7" />
                <feColorMatrix type="hueRotate" result="pt1" >
                <animate attributeName="values" values="0;360;" dur=".6s" repeatCount="indefinite" calcMode="paced" />
                </feColorMatrix>
                <feComposite />
                <feTurbulence type="turbulence" baseFrequency="0.03" numOctaves="7" seed="5" />
                <feColorMatrix type="hueRotate" result="pt2">
                <animate attributeName="values" values="0; 333; 199; 286; 64; 168; 256; 157; 360;" dur="5s" repeatCount="indefinite" calcMode="paced" />
                </feColorMatrix>
                <feBlend in="pt1" in2="pt2" mode="normal" result="combinedNoise" />
                


                <feDisplacementMap in="SourceGraphic" scale="30" xChannelSelector="R" yChannelSelector="B" />
            </filter>
            </defs>
        </svg>

        {/* Content */}
        {type === 'origins' ? (
            <div className="card-container origins">
                <div className="inner-container">
                    <div className="border-outer">
                        <div className="main-card"></div>
                    </div>
                    <div className="glow-layer-1"></div>
                    <div className="glow-layer-2"></div>
                    

                    <div className="overlay-1"></div>
                    <div className="overlay-2"></div>

                    {/* <div className="background-glow"></div> */}

                    <div className="content-container">
                        {children}
                    </div>
                </div>
            </div>   
        ) : (
            <div className="card-container legacy">
                <div className="inner-container">
                    <div className="border-outer">
                        <div className="main-card"></div>
                    </div>
                    <div className="glow-layer-1"></div>
                    <div className="glow-layer-2"></div>

                    <div className="overlay-1"></div>
                    <div className="overlay-2"></div>
                    <div className="background-glow"></div>

                    <div className="content-container">
                        {children}
                    </div>
                </div>
            </div>
        )}
    </main>
  )
};