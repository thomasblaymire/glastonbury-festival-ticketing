import path from 'path'
import nodeExternals from 'webpack-node-externals'
import { Configuration } from 'webpack'

const config: Configuration = {
  entry: {
    'release/index': './lambda/release/index.ts',
    'queue/index': './lambda/queue/index.ts',
  },
  externals: [nodeExternals()],
  target: 'node',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
    clean: true,
  },
  optimization: {
    minimize: false,
  },
}

export default config
