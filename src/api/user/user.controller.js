import config from '../../environment';

exports.create = (req, res) => {
  console.log("req: ", req.body);
  return res.json(200, {message: "success"});
}