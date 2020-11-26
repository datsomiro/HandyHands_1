<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'uploaded_photo_path',
        'location ',
        'volunteer ',
        'user_id',
        'service_categories',
        'description',
        'time',
        'cost', 
    ];
}
