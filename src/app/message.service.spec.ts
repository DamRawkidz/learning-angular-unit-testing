import { MessageService } from "./message.service"

describe('MessageService',() => {
      let servies: MessageService

      beforeEach(() => {
        servies = new MessageService();
      })

      it('should have no messges to start',() => {
        expect(servies.messages.length).toBe(0)
      })

      it('should add a mesages when add is called',() => {
        servies = new MessageService();

        servies.add('message1')

        expect(servies.messages.length).toBe(1)
      })

      it('should remove all messages when clear is calling',() => {
        servies = new MessageService();        
        servies.add('message1');

        servies.clear();

        expect(servies.messages.length).toBe(0)
      })
})