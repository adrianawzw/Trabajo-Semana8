router.post('/login', async (req, res) => {
   const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRY }
   );

   res.json({ token });
});