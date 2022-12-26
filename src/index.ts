import {server} from './server';

function main() {
    server.listen(server.get('port'), () => console.info(`Server is listening at ${server.get('port')}`));
}

main();
