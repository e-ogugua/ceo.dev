-- Create subscriptions table for newsletter, blog, and learn subscriptions
CREATE TABLE IF NOT EXISTS subscriptions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT NOT NULL,
    name TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('newsletter', 'blog', 'learn')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(email, type)
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_subscriptions_email ON subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_subscriptions_type ON subscriptions(type);
CREATE INDEX IF NOT EXISTS idx_subscriptions_created_at ON subscriptions(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (for subscriptions)
CREATE POLICY "Anyone can subscribe" ON subscriptions
    FOR INSERT
    WITH CHECK (true);

-- Create policy to allow admin to read all subscriptions (you can modify this based on your needs)
CREATE POLICY "Admin can read subscriptions" ON subscriptions
    FOR SELECT
    USING (true); -- You might want to restrict this to authenticated admin users only
