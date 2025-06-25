export const engineeringProjectHTML = `
<h2>Engineering Project</h2>
    <!--********************************************************** -->
    <div class="subpage-entry-div va-sub-entry-div">
        <h3><b>Generic MIDI hand glove</b></h3>
        <p>Uni project, Hamburg University of Applied Sciences </p>
        <p>2019</p>

        <img src="../Assets/Images/UI-arrow-down.png" class="ui-arrow-down-img" width=20px />
        <div class="entry-detail-div">
            <div class="description-div">
                <p class="description-paragraph">The MIDI Glove is a wearable music interface I developed using Dehnungsmessstreifen (strain gauges) and an Arduino microcontroller. </p>
                <p class="description-paragraph">It translates hand and finger movements into MIDI signals, allowing the glove to act as a generic MIDI
                    controller in any DAW, such as Ableton Live. </p>
                <p class="description-paragraph">By mapping finger bends to MIDI parameters, users can control synthesizers, effects, and automation in real time through intuitive gestures — making the glove a tactile, expressive performance
                    tool that bridges human motion and digital sound. </p>
                <p class="description-paragraph">This project combines sensor-based hardware prototyping, embedded programming, and MIDI protocol implementation, with the goal of exploring new ways of interacting with music production
                    environments.</p>
            </div>
            <div class="project-img-div">

                <video width=50% class="project-video" alt="midi glove showcase with ableton and serum vst synth" controls muted>
                       <source src="../Assets/Images/engineering/midi-glove-showcase.mp4" type="video/mp4">
                   </video>

            </div>
            <div class="artwork-img-div">
                <div class="artwork-img-column">
                    <img src="../Assets/Images/engineering/midi-glove-first-prototype.jpg" class="artwork-img" alt="first prototype of midi-glove" width=40% />
                    <img src="../Assets/Images/engineering/midi-glove-second-prototype.jpg" class="artwork-img" alt="second prototype of midi-glove" width=40%/>
                </div>
                <div class="artwork-img-column">
                    <img src="../Assets/Images/engineering/midi-glove-third-prototype.jpg" class="artwork-img" alt="third prototype of midi-glove" width=40%/>
                    <img src="../Assets/Images/engineering/midi-glove-3d-print.png" class="artwork-img" alt="midi glove 3d print" width=40%/>
                </div>

            </div>
        </div>
        <img src="../Assets/Images/UI-arrow-up.png" class="ui-arrow-up-img" width=20px />
    </div>
    <!--********************************************************** -->
    <div class="subpage-entry-div va-sub-entry-div">
        <h3><b>SALT V2 – PCB Testsystem for Automated Production Quality Control</b></h3>
        <p>Work related project, Grau GmbH</p>
        <p>2022</p>
        <img src="../Assets/Images/UI-arrow-down.png" class="ui-arrow-down-img" width=20px />
        <div class="entry-detail-div">
            <div class="description-div">
                <p class="description-paragraph">As part of the development of the iconic SALT V2 lamp by Grau GmbH, I designed and implemented a dedicated PCB test system to automate and ensure the electrical functionality of every unit during production. The system includes:</p>
                <ul class="description-ul">
                    <li class="description-li">A fully functional testing software tailored to SALT’s hardware logic</li>
                    <li class="description-li">A custom-built Prüfadaptersystem (Test Adapter Typ 127) integrating mechanical and electrical interfaces (using KiCAD and Eagle Fusion 360)</li>
                    <li class="description-li">A 3D-printed fixture (designed in Fusion 360, using EAGLE and printed with Formlabs) to securely hold the PCB during testing</li>
                </ul>

                <p>This test station allows production operators to verify each SALT PCB before assembly, streamlining the QA process and reducing error margins significantly. The project involved hardware integration, test automation, and physical design,
                    combining my skills in embedded systems, CAD, and process optimization.</p>
            </div>
            <div class="artwork-img-div">
                <div class="artwork-img-column">
                    <img src="../Assets/Images/engineering/SALT_1.jpg" class="artwork-img" alt="SALT_1" width=40% />
                    <img src="../Assets/Images/engineering/SALT_2.jpg" class="artwork-img" alt="SALT_2" width=40%/>
                </div>
                <div class="artwork-img-column">
                    <img src="../Assets/Images/engineering/SALT_3.jpeg" class="artwork-img" alt="SALT_3" width=40%/>
                    <img src="../Assets/Images/engineering/SALT_4.png" class="artwork-img" alt="SALT_4" width=40%/>
                </div>
            </div>
        </div>
        <img src="../Assets/Images/UI-arrow-up.png" class="ui-arrow-up-img" width=20px />
    </div>
    <!--********************************************************** -->
    <div class="subpage-entry-div va-sub-entry-div">
        <h3><b>CANDLE – Cost-Effective PCB Test fixture for Embedded Programming</b></h3>
        <p>Work related project, Grau GmbH</p>
        <p>2023</p>

        <img src="../Assets/Images/UI-arrow-down.png" class="ui-arrow-down-img" width=20px />
        <div class="entry-detail-div">
            <div class="description-div">
                <p class="description-paragraph">For the PCB prototype of the CANDLE design lamp by Grau GmbH, I developed a precision 3D-printed Prüfadapter to enable reliable flashing and programming of the onboard microcontroller. </p>
                <p class="description-paragraph">To reduce development costs, I replaced a traditional
                    Reinhardt Test Fixture with a custom-built solution, designed in Fusion 360 and 3D-printed in-house. Despite the cost efficiency, the adapter maintains high precision in test needle alignment, ensuring reliable electrical contact with
                    the programming interface on the CANDLE PCB. </p>
                <p class="description-paragraph">This project demonstrates my ability to bridge mechanical design and embedded systems, delivering practical, scalable tools in a production-focused environment.</p>
            </div>
            <div class="artwork-img-div">
                <div class="artwork-img-column">
                    <img src="../Assets/Images/engineering/CANDLE_ADAPTER.jpeg" class="artwork-img" alt="CANDLE_ADAPTER"/>
                </div>
            </div>
        </div>
        <img src="../Assets/Images/UI-arrow-up.png" class="ui-arrow-up-img" width=20px />
    </div>
    <!--********************************************************** -->
    <div class="subpage-entry-div va-sub-entry-div">
        <h3><b>Project PLAplay - A Modular Robot Builder Web App</b></h3>
        <p>Personal Fullstack Application</p>
        <p>2025</p>
        <img src="../Assets/Images/UI-arrow-down.png" class="ui-arrow-down-img" width=20px />
        <div class="entry-detail-div">
            <div class="description-div">
                <p class="description-paragraph">PLAplay is a fullstack web application that lets users design their own robots by assembling modular 3D parts such as arms, legs, chest, and backpacks. Inspired by my passion for robot design, interactivity, and customization, PLAplay combines creative freedom with clean interface logic.</p>
                <p class="description-paragraph">The app features:</p>
                <ul class="description-ul">
                    <li class="description-li">A React-based frontend with dynamic component rendering and part selection</li>
                    <li class="description-li">Three.js (React Three Fiber) for real-time 3D visualization and part manipulation</li>
                    <li class="description-li">A Flask + SQLAlchemy backend for user data, part metadata, and custom builds</li>
                    <li class="description-li">Symmetrical part mirroring, drag interaction logic, and planned save/share functionality</li>
                </ul>
            <div class="artwork-img-div">
                <div class="artwork-img-column">
                    <img src="../Assets/Images/engineering/Custombot_1.png" class="artwork-img" alt="Custombot_1" width=40% />
                    <img src="../Assets/Images/engineering/Custombot_2.png" class="artwork-img" alt="Custombot_2" width=40%/>
                </div>
            </div>
        </div>
        <img src="../Assets/Images/UI-arrow-up.png" class="ui-arrow-up-img" width=20px />
    </div>
                        `
export const artProjectHTML = `
<h2>Visual Art Project</h2>
    <!--********************************************************** -->
    <div class="subpage-entry-div va-sub-entry-div">
        <h3><b>Journey Album Artwork</b></h3>
        <p>Hand sketch using Procreate and album cover design using Canvas</p>
        <img src="../Assets/Images/UI-arrow-down.png" class="ui-arrow-down-img" width=20px />
        <div class="entry-detail-div">
            <div class="project-img-div">
                <img src="../Assets/Images/music-production/journey-album-cover-square.png" class="project-img"
                    alt="a picture of journey album cover" width=40% />
                <video width=60% height="auto" class="project-video"
                    alt="a timelapse video of journey album cover sketch" controls>
                    <source src="../Assets/Images/visual-art/journey-album-cover-timelapse.mp4" type="video/mp4">
                </video>
            </div>
        </div>
        <img src="../Assets/Images/UI-arrow-up.png" class="ui-arrow-up-img" width=20px />
    </div>
    <!--********************************************************** -->
    <div class="subpage-entry-div va-sub-entry-div">
        <h3><b>Artworks for Stay Alive EP</b></h3>
        <p>Hand sketch and photos manipulation using Procreate</p>
        <img src="../Assets/Images/UI-arrow-down.png" class="ui-arrow-down-img" width=20px />
        <div class="entry-detail-div">
            <div class="project-img-div">
                <video width=50% height="auto" class="project-video" alt="a timelapse video of Stay Alive cover sketch"
                    controls>
                    <source src="../Assets/Images/visual-art/ep-art-cover-timelapse.mp4" type="video/mp4">
                </video>

                <video width=50% height="auto" class="project-video"
                    alt="a timelapse video of an art cover for stay alive ep youtube visuals" controls>
                    <source src="../Assets/Images/visual-art/ep-art-1-timelapse.mp4" type="video/mp4">
                </video>
            </div>
            <div class="artwork-img-div">
            <div class="artwork-img-column">
                <img src="../Assets/Images/visual-art/ep-art-1.png" class="artwork-img"
                    alt="an artwork from Stay Alive EP visual" width=40% />
                <img src="../Assets/Images/visual-art/ep-art-2.png" class="artwork-img"
                    alt="an artwork from Stay Alive EP visual" width=40% />
                <img src="../Assets/Images/visual-art/ep-art-3.png" class="artwork-img"
                    alt="an artwork from Stay Alive EP visual" width=40% />
                <img src="../Assets/Images/visual-art/ep-art-4.png" class="artwork-img"
                    alt="an artwork from Stay Alive EP visual" width=40% />
            </div>
            <div class="artwork-img-column">
                <img src="../Assets/Images/visual-art/ep-art-5.png" class="artwork-img"
                    alt="an artwork from Stay Alive EP visual" width=40% />
                <img src="../Assets/Images/visual-art/ep-art-6.png" class="artwork-img"
                    alt="an artwork from Stay Alive EP visual" width=40% />
                <img src="../Assets/Images/visual-art/ep-art-7.png" class="artwork-img"
                    alt="an artwork from Stay Alive EP visual" width=40% />
                <img src="../Assets/Images/visual-art/ep-art-8.png" class="artwork-img"
                    alt="an artwork from Stay Alive EP visual" width=40% />
            </div>
            </div>
        </div>
        <img src="../Assets/Images/UI-arrow-up.png" class="ui-arrow-up-img" width=20px />
    </div>
    <!--********************************************************** -->
    <div class="subpage-entry-div va-sub-entry-div">
        <h3><b>Personal artworks</b></h3>
        <p>Hand sketching using Procreate</p>
        <img src="../Assets/Images/UI-arrow-down.png" class="ui-arrow-down-img" width=20px />
        <div class="entry-detail-div">
            <div class="project-img-div">
                <video width=50% height="auto" class="project-video" alt="a timelapse video of art work 3"
                    controls>
                    <source src="../Assets/Images/visual-art/art-work-3-timelapse.mp4" type="video/mp4">
                </video>
            </div>
            <div class="artwork-img-div">
            <div class="artwork-img-column">
                <img src="../Assets/Images/visual-art/art-1.png" class="artwork-img"
                    alt="a personal artwork" width=30%/>
                <img src="../Assets/Images/visual-art/art-2.PNG" class="artwork-img"
                    alt="a personal artwork" width=30% />
                <img src="../Assets/Images/visual-art/art-4.jpg" class="artwork-img"
                    alt="a personal artwork" width=30% />
            </div>
            <div class="artwork-img-column">
                <img src="../Assets/Images/visual-art/art-10.jpg" class="artwork-img"
                    alt="a personal artwork" width=30% />
                <img src="../Assets/Images/visual-art/art-6.PNG" class="artwork-img"
                    alt="a personal artwork" width=30% />
                <img src="../Assets/Images/visual-art/art-7.jpg" class="artwork-img"
                    alt="a personal artwork" width=30% />
            </div>
            <div class="artwork-img-column">
                <img src="../Assets/Images/visual-art/art-8.jpg" class="artwork-img"
                    alt="a personal artwork" width=30% />
                <img src="../Assets/Images/visual-art/art-9.jpg" class="artwork-img"
                    alt="a personal artwork" width=30% />
                <img src="../Assets/Images/visual-art/art-5.PNG" class="artwork-img"
                    alt="a personal artwork" width=30% />
            </div>
            </div>
        </div>
        <img src="../Assets/Images/UI-arrow-up.png" class="ui-arrow-up-img" width=20px />
    </div>
                        `
export const musicProjectHTML = `
       <h2>Music Production Projects</h2>
    <!--********************************************************** -->
    <div class="subpage-entry-div mpp-sub-entry-div">
        <h3><b>DJ Kamikatzi - Resident DJ for Korean Party Factory GmbH</b></h3>
        <p>DJ, Performer</p>
        <p>2017 - Now</p>
        <img src="../Assets/Images/UI-arrow-down.png" class="ui-arrow-down-img" width=20px />
        <div class="entry-detail-div">
            <p class="description-paragraph">I’ve been performing as DJ Kamikatzi since 2017, when I first joined the Korean Party Factory – one of Europe’s most exciting K-pop and K-hip-hop event collectives. </p>
            <p class="description-paragraph">What started as a one-time gig quickly turned into something bigger:</p>
            <p class="description-paragraph">I became their resident DJ, and since then, I’ve been touring regularly across Germany and shaping the musical identity of the shows we create. My sets are rooted in K-pop, hip-hop, and electronic music, but I love weaving in experimental
                edits and high-energy transitions that keep the dancefloor alive and connected. I’m not just mixing songs – I’m building an emotional and rhythmic experience that reflects the energy of the crowd. </p>
            <p class="description-paragraph">Over the years, I’ve also had the chance to perform outside of Germany, and now I’m expanding more regularly across Europe, connecting with new audiences and growing the Kamikatzi sound.</p>
            <a class="description-a-tag" href="https://www.koreanpartyfactory.de/">More about Korean Party Factory</a>
            <div class="artwork-img-column">
                <img src="../Assets/Images/music-production/kamikatzi_1.jpeg" class="artwork-img" alt="kamikatzi_1" width=40% />
                <img src="../Assets/Images/music-production/kamikatzi_2.jpeg" class="artwork-img" alt="kamikatzi_2" width=40%/>
            </div>
            <div class="artwork-img-column">
                <img src="../Assets/Images/music-production/kamikatzi_3.jpeg" class="artwork-img" alt="kamikatzi_3" width=40%/>
                <img src="../Assets/Images/music-production/kamikatzi_4.jpeg" class="artwork-img" alt="kamikatzi_4" width=40%/>
            </div>
        </div>
        <img src="../Assets/Images/UI-arrow-up.png" class="ui-arrow-up-img" width=20px />
    </div>
    <!--********************************************************** -->
    <div class="subpage-entry-div mpp-sub-entry-div">
        <h3><b>Exploring the value of binaural audio format for contemporary pop music</b></h3>
        <p>Masterthesis, Hamburg University of Applied Sciences</p>
        <p>2023</p>
        <img src="../Assets/Images/UI-arrow-down.png" class="ui-arrow-down-img" width=20px />
        <div class="entry-detail-div">
            <div class="project-img-div">
                <iframe id = "spotify-item" class="spotify-player" style="border-radius:12px" src="https://open.spotify.com/embed/album/2bXszwfkxannFe1aSKbTA4?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </div>
        <img src="../Assets/Images/UI-arrow-up.png" class="ui-arrow-up-img" width=20px />
    </div>
    <!--********************************************************** -->
    <div class="subpage-entry-div mpp-sub-entry-div">
        <h3><b>Korine project - game sound design and music production</b></h3>
        <p>Academic project, Hamburg University of Applied Sciences</p>
        <p>2021</p>
        <img src="../Assets/Images/UI-arrow-down.png" class="ui-arrow-down-img" width=20px />
        <div class="entry-detail-div">
            <div class="project-img-div">
                <img src = "../Assets/Images/music-production/korine-artwork.png" class="project-img" alt="a picture of korine artwork" width=50%/>
                <video width=50% height="auto" class="project-video"
                    alt="a demo video of korine game" controls>
                    <source src="../Assets/Images/music-production/korine-demo.mp4" type="video/mp4">
                </video>          
                </div>
        </div>
        <img src="../Assets/Images/UI-arrow-up.png" class="ui-arrow-up-img" width=20px />
    </div>
    <!--********************************************************** -->
    <div class="subpage-entry-div mpp-sub-entry-div">
        <h3><b>Stay Alive EP - First EP under the artist's name Kamikatzi</b></h3>
        <p>Uni Module - Hamburg University of Applied Sciences</p>
        <p>2020</p>
        <img src="../Assets/Images/UI-arrow-down.png" class="ui-arrow-down-img" width=20px />
        <div class="entry-detail-div">
            <div class="project-img-div">
                <iframe class="spotify-player" style="border-radius:12px" src="https://open.spotify.com/embed/album/6IUE6gPgwN48obGBoCk75S?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>            </div>
            </div>
        <img src="../Assets/Images/UI-arrow-up.png" class="ui-arrow-up-img" width=20px />
    </div>
    <!--********************************************************** -->
     <div class="subpage-entry-div mpp-sub-entry-div">
        <h3><b>E.S.R.A project - Ethonographic Sound Recordings Archive</b></h3>
        <p>An collaboration project with the Institute for Systematic Musicology from the Hamburg University</p>
        <p>2019</p>
        <img src="../Assets/Images/UI-arrow-down.png" class="ui-arrow-down-img" width=20px />
        <div class="entry-detail-div">
            <div class="project-img-div">
                <img src = "../Assets/Images/music-production/esra-mapping-screenshot.png" class="project-img" alt="a picture of esra mapping" width=50%/>
                <img src = "../Assets/Images/music-production/esra-project-artists.png" class="project-img" alt="a picture of all esra artists" width=50%/>
            </div>
        </div>
        <img src="../Assets/Images/UI-arrow-up.png" class="ui-arrow-up-img" width=20px />
    </div>
    <!--********************************************************** -->
                        `