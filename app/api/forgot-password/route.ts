import { NextApiRequest, NextApiResponse } from 'next';
import { User } from "@/lib/types";
import { getToken } from 'next-auth/jwt'; 
import crypto from 'crypto';
import nodemailer from 'nodemailer';

const secret = process.env.SECRET;

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: 587,
    secure: false, 
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASS
    }
});

async function sendMail(options: {
  to: string;
  subject: string;
  text: string;
}) {
    return transporter.sendMail({
        from: '"Your Name" <your-email@example.com>', 
        ...options
    });
}
export async function POST(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: '허용되지 않는 메소드' });
    }

    try {
        const { id, email }: Partial<User> = req.body;

        if (!id) {
            return res.status(400).json({ message: "유저가 없습니다" });
        }

        const token = await getToken({ req, secret });
        const resetToken = crypto.randomBytes(20).toString('hex');
        const resetLink = `http://localhost:3000/reset-password?token=${resetToken}`;

        await sendMail({
            to: email,
            subject: '비밀번호 재설정',
            text: `비밀번호를 재설정하려면 다음 링크를 클릭하세요: ${resetLink}`
        });

        return res.status(200).json({ message: "비밀번호 재설정 이메일을 성공적으로 전송했습니다." });
    } catch (error: any) {
        console.error('API 에러 발생:', error);
        return res.status(500).json({ error: error.message });
    }
}