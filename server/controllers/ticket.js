import Ticket from '../models/Ticket';

/**
 * @api {get} api/tickets/ Request Tickets
 * @apiExample {js} Example usage:
 * Request URL: http://localhost:9001/api/tickets
 * Request Method: GET
 * @apiName GetTickets
 * @apiGroup Tickets
 *
 * @apiSuccess {Array} tickets Array of Ticket objects.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "tickets": [
 *          {
 *            "name": "Age over 20",
 *            "price": 20
 *          },
 *          {
 *            "name": "Age under 20",
 *            "price": 10
 *          }
 *        ]
 *     }
 */
export const read = async (req, res) => {
  const tickets = await Ticket.find({});
  return res.json({ tickets });
};

/**
 * @api {delete} api/tickets/:id Remove Ticket
 * @apiExample {js} Example usage:
 * Request URL: http://localhost:9001/api/tickets/5b4170549f679b01facced3c
 * Request Method: DELETE
 * @apiName RemoveTicket
 * @apiGroup Tickets
 *
 * @apiParam {String} id Tickets unique ID.
 *
 * @apiSuccess {String} message Success Message
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Ticket removed!"
 *     }.
 */
export const remove = async (req, res) => {
  await Ticket.findOneAndDelete({ _id: req.params.id });
  return res.json({ message: 'Ticket removed!' });
};

/**
 * @api {put} api/tickets/:id Update Ticket
 * @apiExample {js} Example usage:
 * Request URL: http://localhost:9001/api/tickets/5b4170549f679b01facced3c
 * Request Method: PUT
 * @apiName UpdateTicket
 * @apiGroup Tickets
 *
 * @apiParam {Number} id Ticket unique ID.
 *
 * @apiSuccess {String} message Success Message.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Ticket updated!"
 *     }
 */
export const update = async (req, res) => {
  await Ticket.findOneAndUpdate({ _id: req.params.id }, req.body);
  return res.json('Ticket updated!');
};

/**
 * @api {post} api/tickets/ Create Ticket
 * @apiExample {js} Example usage:
 * Request URL:  http://localhost:9001/api/tickets
 * Request Method: POST
 * @apiName CreateTicket
 * @apiGroup Tickets
 *
 *
 * @apiSuccess {String} message Success Message.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Ticket created!"
 *     }
 */
export const create = async (req, res) => {
  const ticket = new Ticket({
    name: req.body.name,
    price: parseInt(req.body.price, 10)
  });
  await ticket.save();
  return res.json({ message: 'Ticket created!' });
};
