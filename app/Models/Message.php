<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    protected $fillable = [
        'created_at',
        'updated_at',
        'from_users_id ',
        'to_users_id',
        'message_content',
        
    ];
}
