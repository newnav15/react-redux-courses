import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
/* eslint-disable no-console */
process.env.NODE_ENV = 'production';
console.log("generating minified bundle for prod");

webpack(webpackConfig).run((err,stats) => {
  if(err){
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if(jsonStats.hasErrors){
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if(jsonStats.hasWarnings){
    console.log('Webpack generated the following warnings '.bold.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));

  }

  console.log(`Webpack stats ${stats}`);

  console.log("app compiled successfully");

  return 0;
});
