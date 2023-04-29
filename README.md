<h1>Data Visualizer</h1>
<hr><p>The following project is a browser app that lets the user visualize data by plotting it against charts</p><h2>General Information</h2>
<hr><ul>
<li>This demo uses WineData.json as a reference to plot it on Echarts - An open source javascript visualization library</li>
</ul><ul>
<li>The app renders two charts. One plots a Line graph for Flavanoids vs Ash data and the 2nd one plots Bar graph against Alcohol vs minimum Magnesium. To calculate minimum Magnesium from the raw data Math.floor() function is used.</li>
</ul><ul>
<li>The project serves as a recruitment assignment for Manufac Analytics Private Limited. This project does not accept contributions.</li>
</ul><h2>Technologies Used</h2>
<hr><ul>
<li>HTML</li>
</ul><ul>
<li>CSS</li>
</ul><ul>
<li>React</li>
</ul><ul>
<li>Typescript</li>
</ul><ul>
<li>Yarn</li>
</ul><ul>
<li>Apache Echarts</li>
</ul><ul>
<li>ESLint</li>
</ul><h2>Basic Technical Summary</h2>
<hr><ul>
<li>This is a single page application without complex routing and no react routers are there</li>
</ul><ul>
<li>The App lazily loads the chunk of heavy graphical calculations so a lazy loader is implemented at the root.</li>
</ul><ul>
<li>The user interface has a button that lets him/her to toggle through 1st and 2nd chart. This is implemented because rendering 2 charts at the same time was causing responsiveness issues.</li>
</ul><ul>
<li>Basic CSS is used for the app. No tailwind CSS is used. This is mention worthy as the tailwind class naming reference is followed. There's no tailwind css implemented on the app only the class naming signature might look so</li>
</ul><ul>
<li>The app supports typescript. So lot of stuff like interfaces and static data are present in the 'src' directory. These files have comments describing their purpose and details. Any file/directory that might look different from the template should have a description in comments.</li>
</ul><ul>
<li>Any unused code or file have been removed permanently. However it's mention worthy that the public directory haven't been touched</li>
</ul><ul>
<li>ESLint is used for code formatting. It is advised to install ESLint and Prettier in VSCode before installing the packages</li>
</ul><h2>Screenshots</h2>
<hr><p><img src="https://github.com/theDevSoham/web_data_visualizer/blob/main/src/assets/images/Chart%201.png" alt=""></p><p><img src="https://github.com/theDevSoham/web_data_visualizer/blob/main/src/assets/images/Chart_rectify.png" alt=""></p><h2>Setup</h2>
<hr><p>Basic requirements for the setup:</p>
<ol>
<li>yarn installed on the device</li>
<li>node js installed on the device</li>
<li>ESLint and Prettier is a must as the project uses linting</li>
</ol><h5>Steps</h5><ul>
<li>Clone the repository into a device that meets the basic requirements.</li>
</ul><ul>
<li>Before running yarn start, the user must run yarn command first. This will install the packages from package.json</li>
</ul><ul>
<li>Beware of running npm. Npm will also work though package-lock.json and yarn-lock.json might conflict.</li>
</ul><ul>
<li>Finally run yarn start to start the app on localhost:3000</li>
</ul><h2>Deployed Link</h2>
<h3>The app is deployed at: https://visualizerdata.netlify.app</h3>
