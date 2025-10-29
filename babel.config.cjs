// This configuration tells Babel how to compile modern JavaScript (ESM) 
// into code that Jest can easily understand (CommonJS).
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // Target Node.js for test environment
        targets: {
          node: 'current', 
        },
      },
    ],
  ],
};
