import { MessageClass } from './message-class';

describe('MessageClass', () => {
  it('should create an instance', () => {
    expect(new MessageClass(1001,"John","Snow","6138667654","email@email.com","I need my car serviced.")).toBeTruthy();
  });
});
