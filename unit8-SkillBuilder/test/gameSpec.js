const expect = require('chai').expect;
const path = require('path');
const child = require('child_process');
function helperConverter(input) {
  return input.toString('utf-8');
}

describe('asks questions to the user', () => {
  beforeEach(() => {
    exec = 'node ' + path.join(__dirname, '..', 'game.js');
    proc = child.spawn(exec, {shell: true, stdio: 'pipe'});
  });
  it('tests', (done) => {
    proc.stdout.once('data', (output) => {
      expect(output.toString('utf-8')).to.eq('Would you like to play?\n');
      done();
    });
  });
  it('lets a user cancel a game by typing \'no\' at prompt', (done) => {
    proc.stdout.once('data', (dataOutput) => {
      proc.stdin.write('no\r');
      proc.stdout.on('data', (output) => {
        expect(output.toString('utf-8')).to.eq('Wiggity whack');
        done();
      });
    });
  });
  it('lets a user start a game by typing \'yes\' at prompt', (done) => {
    proc.stdout.once('data', (dataOutput) => {
      proc.stdin.write('yes\r');
      proc.stdout.once('data', (output) => {
        expect(helperConverter(output)).to.eq('Awesome!\n');
        done();
      });
    });
  });
  it('asks a user to pick a favorite programming language by pressing \'1\' at prompt', (done) => {
    proc.stdout.once('data', (data) => {
      proc.stdin.write('yes\r');
      proc.stdout.once('data', () => {
        proc.stdout.on('data', (data) => {
          expect(helperConverter(data)).to.eq('What is your favorite programming language?\n1: Javascript\n2: Cobol\n3: Erlang\n');
          done();
        });
      });
    });
  });
  it('the user can pick javascript! by pressing \'1\' at the prompt', (done) => {
    proc.stdout.once('data', () => {
      proc.stdin.write('yes\r');
      proc.stdout.once('data', () => {
        proc.stdout.once('data', () => {
          proc.stdin.write('1\r');
          proc.stdout.on('data', (data) => {
            expect(helperConverter(data)).to.eq('Really?\nProve it!\nWrite some javascript that evaluates to 42\n');
            done();
          })
        });
      });
    });
  });
  it('the user can enter js that evals to 42 as a sum', (done) => {
    proc.stdout.once('data', (data) => {
      proc.stdin.write('yes\r');
      proc.stdout.once('data', () => {
        proc.stdout.once('data', (data) => {
          proc.stdin.write('1\r');
          proc.stdout.once('data', (data) => {
            proc.stdin.write('40 + 2\r');
              proc.stdout.on('data', (data) => {
                expect(helperConverter(data)).to.eq('Nice Job\nHow about another?\n Given an array arr = [1,2,3] how do you get the first element?\n');
                done();
              });
          })
        });
      });
    });
  });
  it('the user can enter js that evals to 42 as multiply', (done) => {
    proc.stdout.once('data', (data) => {
      proc.stdin.write('yes\r');
      proc.stdout.once('data', () => {
        proc.stdout.once('data', (data) => {
          proc.stdin.write('1\r');
          proc.stdout.once('data', (data) => {
            proc.stdin.write('21 * 2\r');
              proc.stdout.on('data', (data) => {
                expect(helperConverter(data)).to.eq('Nice Job\nHow about another?\n Given an array arr = [1,2,3] how do you get the first element?\n');
                done();
              });
          })
        });
      });
    });
  });
});
