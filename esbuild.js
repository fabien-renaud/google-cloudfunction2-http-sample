const {build} = require('esbuild');
const fs = require('fs');
const {version, description, dependencies} = require('./package.json');

const name = 'google-cloudfunction2-http-sample';

// Build sources
build({
    entryPoints: [`src/server.ts`],
    platform: 'node',
    format: 'cjs',
    minify: false,
    bundle: true,
    target: 'es2021',
    outfile: `build/${name}/index.js`
})
    .then(() => {
        // Create new package.json from original metadata
        const packageJson = {
            name,
            version,
            description,
            main: 'index.js',
            dependencies,
            engines: {node: '16.19.0'}
        };

        fs.writeFileSync(`build/${name}/package.json`, JSON.stringify(packageJson, null, 4), {encoding: 'utf8'});
    })
    .catch((error) => {
        process.stderr.write(error.stderr);
        process.exit(1);
    });
